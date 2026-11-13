import json
from itertools import product

import sympy as symbolic


def require(condition, message):
    if not condition:
        raise ValueError(message)


def equal(left, right):
    difference = left - right
    if isinstance(difference, symbolic.MatrixBase):
        return all(symbolic.simplify(entry) == 0 for entry in difference)
    return symbolic.simplify(difference) == 0


def family(parameter):
    first, second, third = parameter
    return [
        symbolic.Matrix([30, 0, 0, 1]),
        symbolic.Matrix([20, 0, 0, -1]),
        symbolic.Matrix([10 + first, symbolic.sqrt(4 + second), 0, third]),
        symbolic.Matrix([10 - first, 0, symbolic.sqrt(4 - second), -third]),
    ]


metric = symbolic.diag(1, -1, -1, -1)
rotation = symbolic.Matrix([[1, 0, 0, 0], [0, 0, -1, 0],
                            [0, -1, 0, 0], [0, 0, 0, -1]])
first, second, third = symbolic.symbols('s t d', real=True)
event = family((first, second, third))


def minkowski(left, right):
    return (left.T * metric * right)[0]


require(equal(rotation.T * metric * rotation, metric), 'Lorentz identity')
require(rotation.det() == 1 and rotation[0, 0] > 0, 'proper orthochronous rotation')
opposite = family((-first, -second, -third))
permuted = [event[0], event[1], event[3], event[2]]
require(all(equal(target, rotation * metric * source)
            for target, source in zip(opposite, permuted)), 'antipodal identity')
first_norm = minkowski(event[0], event[0])
second_norm = minkowski(event[1], event[1])
pair_product = minkowski(event[0], event[1])
collision_gap = pair_product ** 2 - first_norm * second_norm
require((first_norm, second_norm, pair_product, collision_gap) ==
        (899, 399, 601, 2500), 'collision constants')
residual = event[0] + event[1] - event[2] - event[3]
require(equal(minkowski(residual, residual), 892), 'timelike completion')
exchange_basis = symbolic.groebner(
    [2 * first, 2 * third, 2 * second, first ** 2 + second ** 2 + third ** 2 - 1],
    first, second, third)
require(list(exchange_basis) == [1], 'exchange equations contradict sphere')
transverse_first, transverse_second = symbolic.symbols('A B', positive=True)
block_entries = symbolic.symbols('u11 u12 u21 u22', real=True)
block = symbolic.Matrix(2, 2, block_entries)
constraints = list(block * symbolic.Matrix([transverse_first, 0]) -
                   symbolic.Matrix([transverse_first, 0]))
constraints += list(block * symbolic.Matrix([0, transverse_second]) -
                    symbolic.Matrix([0, transverse_second]))
fixed_block = symbolic.solve(constraints, block_entries, dict=True)
require(len(fixed_block) == 1 and block.subs(fixed_block[0]) == symbolic.eye(2),
        'fixed transverse axes imply identity')
require(block.subs(fixed_block[0]).det() == 1, 'fixed block determinant')

marker_count = symbolic.symbols('r', integer=True, nonnegative=True)
completion_energy = 30 - marker_count / (marker_count + 1)
require(equal(completion_energy ** 2 - 8,
              833 + (58 * marker_count + 59) / (marker_count + 1) ** 2),
        'arbitrary marker completion identity')
marker_bound_certificate = marker_count * (marker_count + 2) / (marker_count + 1) ** 2
require(equal(1 - 1 / (marker_count + 1) ** 2, marker_bound_certificate) and
        marker_bound_certificate.is_nonnegative,
        'marker squared mass at most one')
require(symbolic.simplify((58 * marker_count + 59) /
                          (marker_count + 1) ** 2).is_positive,
        'completion squared mass strictly above 833')
event_matrix = symbolic.Matrix.hstack(*event)
require(equal(event_matrix.det(), -50 * symbolic.sqrt(4 + second) *
              symbolic.sqrt(4 - second)), 'labeled determinant identity')
require(equal((metric * event_matrix).det(), -event_matrix.det()),
        'determinant parity identity')


def first_nonzero(values):
    return next((value for value in values if value != 0), 0)


for values in product([-1, 0, 1], repeat=3):
    require(first_nonzero(tuple(-value for value in values)) == -first_nonzero(values),
            'first nonzero component is odd')
    require((first_nonzero(values) == 0) == all(value == 0 for value in values),
            'first nonzero component preserves zero set')

parameters = [symbolic.Matrix(vector) for vector in
              [(1, 0, 0), (-1, 0, 0), (0, 1, 0), (0, -1, 0),
               (0, 0, 1), (0, 0, -1)]]
grid = [symbolic.Rational(-1), symbolic.Rational(-1, 2), symbolic.Rational(0),
        symbolic.Rational(1, 2), symbolic.Rational(1)]
for horizontal, vertical in product(grid, repeat=2):
    denominator = 1 + horizontal ** 2 + vertical ** 2
    parameters.append(symbolic.Matrix([2 * horizontal / denominator,
                                      2 * vertical / denominator,
                                      (horizontal ** 2 + vertical ** 2 - 1) / denominator]))
for parameter in parameters:
    require(equal((parameter.T * parameter)[0], 1), 'unit sphere input')
    momenta = family(parameter)
    for momentum in momenta:
        require(momentum[0] > 0 and symbolic.simplify(minkowski(momentum, momentum)) > 0,
                'strict future timelike input')
    require(all(equal(target, rotation * metric * source)
                for target, source in zip(family(-parameter),
                                          [momenta[0], momenta[1], momenta[3], momenta[2]])),
            'finite antipodal identity')
    for momentum in momenta[2:]:
        squared_mass = symbolic.simplify(minkowski(momentum, momentum))
        require(75 <= squared_mass <= 121, 'active squared mass bounds')
    for total_count in range(4, 13):
        extra_count = total_count - 4
        marker = symbolic.Matrix([symbolic.Rational(1, extra_count + 1), 0, 0, 0])
        require(0 < minkowski(marker, marker) <= 1, 'marker mass separation')
        require(equal(rotation * metric * marker, marker), 'marker antipodal identity')
        augmented = momenta + [marker] * extra_count
        augmented_opposite = family(-parameter) + [marker] * extra_count
        augmented_permuted = [augmented[0], augmented[1], augmented[3],
                              augmented[2]] + augmented[4:]
        require(all(equal(target, rotation * metric * source)
                    for target, source in zip(augmented_opposite, augmented_permuted)),
                'augmented antipodal identity')
        completion = (momenta[0] + momenta[1] - momenta[2] - momenta[3] -
                      extra_count * marker)
        require(completion[0] > 29 and minkowski(completion, completion) > 833,
                'strict timelike completion with markers')

print(json.dumps({
    'status': 'pass',
    'symbolic_identities': ['proper Lorentz rotation', 'antipodal family identity',
                            'collision gap 2500', 'timelike completion square 892',
                            'exchange equations inconsistent with unit sphere',
                            'fixed transverse axes imply determinant one',
                            'arbitrary marker completion square exceeds 833',
                            'marker squared mass at most one',
                            'labeled determinant and its parity'],
    'rational_sphere_inputs': len(parameters),
    'augmented_family_checks': len(parameters) * 9,
    'total_momentum_counts': list(range(4, 13)),
    'scalar_compression_controls': 27,
    'coverage': 'Exact algebraic identities and finite timelike/antipodal controls; '
                'the all-input lower bounds and labeled classification follow from '
                'the written sphere, Borsuk-Ulam and reflection arguments.',
}, indent=2) + '\n', end='')
