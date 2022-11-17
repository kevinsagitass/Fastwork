
import numpy as np
from numpy.random import randint
from numpy.random import rand


columns = np.load('columns.npy', allow_pickle=True)
data = np.load('data.npy')

# index slicer
ix_slicer = -2

def decode_pair_index(pair_index, columns):
    return columns[pair_index[0]], columns[pair_index[1]]


def generate_pair_indexes(n_pair=1500, n_index=261):
    return [randint(0, n_index, 2) for _ in range(n_pair)]


def get_two_location(data, pair_index):
    return [data[pair_index[0]], data[pair_index[1]]]


# objective (fitness) function
def objective(two_location):
    score = 0

    # split location pair
    first, second = two_location

    # slice banjir and macet from first location
    b_first, m_first  = first[ix_slicer:]

    # slice banjir and macet from second location
    b_second, m_second = second[ix_slicer:]

    # if one or all location is not safe from banjir
    if not np.all([b_first, b_second]):
        # just return initial score i.e 0
        return score

    # if safe from banjir, add score
    score += 1

    # if one or all location is safe from macet
    if np.any([m_first, m_second]):
        # add score
        score += 1
    
    score_jarak = sum(first[:ix_slicer] | second[:ix_slicer])
    score += score_jarak
    return score


# tournament selection
def selection(pop, scores, k=3):
    # first random selection
    selection_ix = randint(len(pop))
    for ix in randint(0, len(pop), k-1):
        if scores[ix] < scores[selection_ix]:
            selection_ix = ix
    return pop[selection_ix]


# crossover two parents to create two children
def crossover(p1, p2, r_cross):
	# children are copies of parents by default
    c1, c2 = p1.copy(), p2.copy()
	# check for recombination
    if rand() < r_cross:
		# select crossover point that is not on the end of the string
        pt = 1
		# perform crossover
        c1 = np.array([p1[0], p2[1]])
        c2 = np.array([p2[0], p1[1]])
    return [c1, c2]
 

# mutation operator
def mutation(bitstring, r_mut):
    for i in range(len(bitstring)):
		# check for a mutation
        if rand() < r_mut:
			# flip the bit
            if i == 0:
                bitstring[i] + 1

            elif i == 260:
                bitstring[i] - 1
            else:
                bitstring[i] = bitstring[i] - 1


def genetic_algorithm(data, 
                      objective,  
                      r_cross=0.9, 
                      r_mut = 1.0 / float(263)):
    # population
    pair_indexes = generate_pair_indexes()
    
    # keep track of best solution
    best, best_eval = 0, objective(get_two_location(data, pair_indexes[0]))
    scores = []

    generation = 0

    while True:
        generation += 1

        # evaluate all candidates in the population
        scores = [objective(get_two_location(data, pair_index)) for pair_index in pair_indexes]

        # check for new best solution
        for i in range(len(pair_indexes)):
            if scores[i] > best_eval:
                best, best_eval = pair_indexes[i], scores[i]
                # print(f'Generation {generation}: New best scores {best_eval} on index {best}')
        
        # if we find pair with maximal fitness value
        if best_eval > 262:
            break

        if generation == 10000:
            print('Running 10_000 times but no solution found')
            print('Rerun the code may resolve the problem')

        selected = [selection(pair_indexes, scores) for _ in range(len(pair_indexes))]
        
        # create the next generation
        children = list()
        for i in range(0, len(pair_indexes), 2):
			# get selected parents in pairs
            p1, p2 = selected[i], selected[i+1]

            for c in crossover(p1, p2, r_cross):
                mutation(c, r_mut)
                children.append(c)
        pair_indexes = children
    return best, best_eval


location_pair, scores = genetic_algorithm(data, objective)

print(scores)
print(decode_pair_index(location_pair, columns))