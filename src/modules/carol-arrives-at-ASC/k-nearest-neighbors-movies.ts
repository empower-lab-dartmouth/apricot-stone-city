/* eslint-disable no-param-reassign */
/**
* This type describes the coordinates of a point in our "movie space,"
which is defined as having one dimension for each genera.
*/
type DataPoint = {
    scienceFiction: number
    fantasy: number
    horror: number
    action: number
    thriller: number
    drama: number
    mystery: number
    distance?: number
}

/**
 * A movie is a data point that represents an embedding of a particular movie in "movie space"
 */
type Movie = {
    name: string
    embedding: DataPoint
}

/**
 * A target is a point in "movie space" that is provided to us
 *  by the user, either directly or indirectly (e.g. from an average of provided "liked" movies).
 * We use target as a reference for finding the movies that are
 * most likely to be similar to the user's specified interests.
 */
type Target = DataPoint

export const calculateDistanceBetweenTwoPoints: (
    point1: DataPoint,
    point2: DataPoint
) => number = (point1, point2) =>
    Math.sqrt(
        (point1.action - point2.action) ** 2 +
            (point1.drama - point2.drama) ** 2 +
            (point1.fantasy - point2.fantasy) ** 2 +
            (point1.horror - point2.horror) ** 2 +
            (point1.mystery - point2.mystery) ** 2 +
            (point1.scienceFiction - point2.scienceFiction) ** 2 +
            (point1.thriller - point2.thriller) ** 2
    )

/**
 * Find the k (some specified number) of nearest movies to the provided target.
 * Uses the eucledian distance formula to
 * calculate distance between each movie and the provided target,
 * then orders the results by distance and returns the top k.
 */
export const findKNearestNeighbors: (
    movies: Movie[],
    target: Target,
    k: number
) => Movie[] = (movies, target, k) => {
    movies.forEach(movie => {
        movie.embedding.distance = calculateDistanceBetweenTwoPoints(
            movie.embedding,
            target
        )
    })
    movies = movies.sort(
        (movie1, movie2) =>
            (movie1.embedding.distance as number) -
            (movie2.embedding.distance as number)
    )
    return movies.slice(0, k)
}

export const getMovieNames: (movies: Movie[]) => string[] = movies =>
    movies.map(movie => movie.name)

export const averageMultipleMovieScores: (
    movies: Movie[]
) => DataPoint = movies => {
    let sumOfScores: DataPoint = {
        scienceFiction: 0,
        fantasy: 0,
        horror: 0,
        action: 0,
        thriller: 0,
        drama: 0,
        mystery: 0,
    }
    movies.forEach(movie => {
        sumOfScores = {
            scienceFiction:
                sumOfScores.scienceFiction + movie.embedding.scienceFiction,
            fantasy: sumOfScores.fantasy + movie.embedding.fantasy,
            horror: sumOfScores.horror + movie.embedding.horror,
            action: sumOfScores.action + movie.embedding.action,
            thriller: sumOfScores.thriller + movie.embedding.thriller,
            drama: sumOfScores.drama + movie.embedding.drama,
            mystery: sumOfScores.mystery + movie.embedding.mystery,
        }
    })
    const numberOfMoviesBeingAveraged = movies.length
    const averageScores = {
        scienceFiction:
            sumOfScores.scienceFiction / numberOfMoviesBeingAveraged,
        fantasy: sumOfScores.fantasy / numberOfMoviesBeingAveraged,
        horror: sumOfScores.horror / numberOfMoviesBeingAveraged,
        action: sumOfScores.action / numberOfMoviesBeingAveraged,
        thriller: sumOfScores.thriller / numberOfMoviesBeingAveraged,
        drama: sumOfScores.drama / numberOfMoviesBeingAveraged,
        mystery: sumOfScores.mystery / numberOfMoviesBeingAveraged,
    }
    return averageScores
}

// const SAMPLE_TARGET: Target = {
//   scienceFiction: 5,
//   fantasy: 5,
//   horror: 5,
//   action: 5,
//   thriller: 0,
//   drama: 0,
//   mystery: 0,
// };

export const numberedListOfMovies: (movies: Movie[]) => string = movies => {
    movies.map(movie => movie.name)
    let result = ''
    for (let i = 0; i < movies.length; i += 1) {
        result = `${result}\n(${i + 1}) ${movies[i].name}`
    }
    return result
}

export const MOVIE_LIBRARY: Movie[] = [
    {
        name: 'The Martian',
        embedding: {
            scienceFiction: 10,

            fantasy: 2,

            horror: 1,

            action: 5,

            thriller: 0,

            drama: 9,

            mystery: 0,

            distance: 0,
        },
    },

    {
        name: 'StarTrek',

        embedding: {
            scienceFiction: 9,

            fantasy: 1,

            horror: 1,

            action: 2,

            thriller: 2,

            drama: 7,

            mystery: 4,

            distance: 0,
        },
    },

    {
        name: 'Pets',

        embedding: {
            scienceFiction: 0,

            fantasy: 9,

            horror: 0,

            action: 4,

            thriller: 0,

            drama: 5,

            mystery: 1,

            distance: 0,
        },
    },

    {
        name: 'Murder in the orient express',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 2,
            action: 3,
            thriller: 1,
            drama: 7,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'Death on the Nile',
        embedding: {
            scienceFiction: 0,
            fantasy: 3,
            horror: 2,
            action: 4,
            thriller: 2,
            drama: 8,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'Knives out',
        embedding: {
            scienceFiction: 0,
            fantasy: 2,
            horror: 1,
            action: 5,
            thriller: 2,
            drama: 6,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'A world beyond',
        embedding: {
            scienceFiction: 9,
            fantasy: 4,
            horror: 1,
            action: 6,
            thriller: 4,
            drama: 8,
            mystery: 6,
            distance: 0,
        },
    },
    {
        name: 'Miss Marple: 4:50pm at Paddington',
        embedding: {
            scienceFiction: 0,
            fantasy: 2,
            horror: 2,
            action: 4,
            thriller: 3,
            drama: 6,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'Mord im Pfarrhaus',
        embedding: {
            scienceFiction: 0,
            fantasy: 3,
            horror: 5,
            action: 4,
            thriller: 6,
            drama: 7,
            mystery: 9,
            distance: 0,
        },
    },
    {
        name: 'Dune',
        embedding: {
            scienceFiction: 9,
            fantasy: 8,
            horror: 1,
            action: 7,
            thriller: 1,
            drama: 2,
            mystery: 3,
            distance: 0,
        },
    },
    {
        name: 'Lord of the Rings 1-3.Part',
        embedding: {
            scienceFiction: 1,
            fantasy: 10,
            horror: 0,
            action: 6,
            thriller: 0,
            drama: 3,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'Wizard of oz',
        embedding: {
            scienceFiction: 0,
            fantasy: 9,
            horror: 0,
            action: 2,
            thriller: 1,
            drama: 0,
            mystery: 2,
            distance: 0,
        },
    },
    {
        name: 'Harry Potter',
        embedding: {
            scienceFiction: 0,
            fantasy: 10,
            horror: 2,
            action: 4,
            thriller: 1,
            drama: 4,
            mystery: 5,
            distance: 0,
        },
    },
    {
        name: 'Narnia',
        embedding: {
            scienceFiction: 0,
            fantasy: 9,
            horror: 0,
            action: 6,
            thriller: 0,
            drama: 4,
            mystery: 3,
            distance: 0,
        },
    },
    {
        name: 'Shrek',
        embedding: {
            scienceFiction: 0,
            fantasy: 10,
            horror: 0,
            action: 2,
            thriller: 0,
            drama: 1,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'Interstellar',
        embedding: {
            scienceFiction: 10,
            fantasy: 2,
            horror: 1,
            action: 7,
            thriller: 2,
            drama: 8,
            mystery: 7,
            distance: 0,
        },
    },
    {
        name: 'Inception',
        embedding: {
            scienceFiction: 9,
            fantasy: 1,
            horror: 2,
            action: 8,
            thriller: 1,
            drama: 6,
            mystery: 3,
            distance: 0,
        },
    },
    {
        name: 'Matrix',
        embedding: {
            scienceFiction: 9,
            fantasy: 2,
            horror: 1,
            action: 8,
            thriller: 4,
            drama: 1,
            mystery: 2,
            distance: 0,
        },
    },
    {
        name: 'Transcendence',
        embedding: {
            scienceFiction: 10,
            fantasy: 1,
            horror: 2,
            action: 7,
            thriller: 3,
            drama: 7,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'Aliens Covenant',
        embedding: {
            scienceFiction: 9,
            fantasy: 7,
            horror: 8,
            action: 7,
            thriller: 6,
            drama: 1,
            mystery: 4,
            distance: 0,
        },
    },
    {
        name: 'South Paw',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 0,
            action: 7,
            thriller: 0,
            drama: 8,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'Creed',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 0,
            action: 7,
            thriller: 0,
            drama: 7,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'American Psycho',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 1,
            action: 8,
            thriller: 0,
            drama: 8,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'The Guilty',
        embedding: {
            scienceFiction: 1,
            fantasy: 1,
            horror: 2,
            action: 8,
            thriller: 2,
            drama: 7,
            mystery: 2,
            distance: 0,
        },
    },
    {
        name: '365 Days',
        embedding: {
            scienceFiction: 0,
            fantasy: 1,
            horror: 0,
            action: 6,
            thriller: 0,
            drama: 8,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'American Sniper',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 4,
            action: 9,
            thriller: 2,
            drama: 8,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'The Dark Knight',
        embedding: {
            scienceFiction: 1,
            fantasy: 8,
            horror: 1,
            action: 9,
            thriller: 7,
            drama: 6,
            mystery: 4,
            distance: 0,
        },
    },
    {
        name: 'Avengers Endgame',
        embedding: {
            scienceFiction: 2,
            fantasy: 9,
            horror: 0,
            action: 10,
            thriller: 4,
            drama: 1,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'Spider-Man: No Way Home',
        embedding: {
            scienceFiction: 2,
            fantasy: 8,
            horror: 0,
            action: 9,
            thriller: 3,
            drama: 2,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'No Time To Die',
        embedding: {
            scienceFiction: 1,
            fantasy: 0,
            horror: 1,
            action: 7,
            thriller: 9,
            drama: 8,
            mystery: 3,
            distance: 0,
        },
    },
    {
        name: 'Mission:Impossible - Fallout',
        embedding: {
            scienceFiction: 1,
            fantasy: 0,
            horror: 0,
            action: 10,
            thriller: 7,
            drama: 2,
            mystery: 1,
            distance: 0,
        },
    },
    {
        name: 'Jurassic Park',
        embedding: {
            scienceFiction: 5,
            fantasy: 2,
            horror: 0,
            action: 8,
            thriller: 6,
            drama: 3,
            mystery: 2,
            distance: 0,
        },
    },
    {
        name: 'Heat',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 0,
            action: 10,
            thriller: 7,
            drama: 1,
            mystery: 9,
            distance: 0,
        },
    },
    {
        name: 'Resident Evil',
        embedding: {
            scienceFiction: 7,
            fantasy: 0,
            horror: 10,
            action: 9,
            thriller: 8,
            drama: 0,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'Bird Box',
        embedding: {
            scienceFiction: 7,
            fantasy: 0,
            horror: 9,
            action: 0,
            thriller: 10,
            drama: 6,
            mystery: 3,
            distance: 0,
        },
    },
    {
        name: 'Tenet',
        embedding: {
            scienceFiction: 5,
            fantasy: 1,
            horror: 0,
            action: 8,
            thriller: 10,
            drama: 3,
            mystery: 2,
            distance: 0,
        },
    },
    {
        name: 'Prestige – Die Meister der Magie',
        embedding: {
            scienceFiction: 4,
            fantasy: 0,
            horror: 0,
            action: 0,
            thriller: 10,
            drama: 7,
            mystery: 8,
            distance: 0,
        },
    },
    {
        name: 'Terminator 2',
        embedding: {
            scienceFiction: 6,
            fantasy: 0,
            horror: 2,
            action: 10,
            thriller: 9,
            drama: 0,
            mystery: 0,
            distance: 0,
        },
    },
    {
        name: 'Prisoners',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 0,
            action: 1,
            thriller: 10,
            drama: 8,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'The Shawshank Redemption',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 0,
            action: 2,
            thriller: 5,
            drama: 9,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'The Sixth Sense',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 7,
            action: 2,
            thriller: 5,
            drama: 3,
            mystery: 10,
            distance: 0,
        },
    },
    {
        name: 'Shutter Island',
        embedding: {
            scienceFiction: 0,
            fantasy: 0,
            horror: 6,
            action: 1,
            thriller: 7,
            drama: 5,
            mystery: 9,
            distance: 0,
        },
    },
]

export const kSimilarFilms = (movie: Movie, k: number) =>
    findKNearestNeighbors(MOVIE_LIBRARY, movie.embedding, k + 1)
        .slice(1, undefined)
        .map(m => m.name)
        .join(',\n\n')

export const infoAboutTheMovie = (
    movie: Movie
) => `Action: ${movie.embedding.action}\n
  Drama: ${movie.embedding.drama}\n
  Fantasy: ${movie.embedding.fantasy}\n
  Horror: ${movie.embedding.horror}\n
  Mystery: ${movie.embedding.mystery}\n
  Science Fiction: ${movie.embedding.scienceFiction}\n
  Thriller: ${movie.embedding.thriller}\n`
