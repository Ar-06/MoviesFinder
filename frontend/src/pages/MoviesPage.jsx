import { useMovies } from "../context/MoviesContext.jsx";
import { MoviesGrid } from "../components/Home/MoviesGrid.jsx";
import { ModalMovie } from "../components/Movie/ModalMovie.jsx";

export const MoviesPage = () => {
  const { isModalOpen, setIsModalOpen, filterMovies } = useMovies();

  return (
    <div>
      <MoviesGrid movies={filterMovies} />
      <ModalMovie
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
