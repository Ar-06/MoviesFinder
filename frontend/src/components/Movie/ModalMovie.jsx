import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MovieFormPage } from "../../pages/MovieFormPage";
import { useMovies } from "../../context/MoviesContext";

export const ModalMovie = ({ isOpen, onClose }) => {
  const { addNewMovie } = useMovies();

  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-xl font-bold text-gray-900">
                Agregar Película
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <MovieFormPage onClose={onClose} addNewMovie={addNewMovie} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
