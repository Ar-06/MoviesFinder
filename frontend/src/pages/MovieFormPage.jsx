import { useState } from "react";
import { X, Upload } from "lucide-react";
import { postMovieRequest } from "../api/movies";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import { useMovies } from "../context/MoviesContext";

export const MovieFormPage = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { addNewMovie } = useMovies();

  const handleImageChange = (e) => {
    const file = e.target.files[0] || null;
    if (file) {
      setImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", year);
    formData.append("rating", rating);
    if (image) formData.append("image", image);

    try {
      const { data } = await postMovieRequest(formData);

      addNewMovie(data);

      toast.success("Película agregada correctamente");

      confetti();
      onClose();
    } catch (error) {
      toast.error("Error al agregar película");
      console.error(error);
    }
  };

  return (
    <form className="p-4 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Imagen de la película
        </label>
        <div className="flex items-center justify-center">
          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Vista previa"
                className="h-40 w-auto object-cover rounded-md"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-gray-900 text-white p-1 rounded-full cursor-pointer"
                onClick={() => {
                  setImage(null);
                  setPreviewUrl(null);
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="h-10 w-10 text-gray-400 mb-2 " />
                <p>Haz click para subir una imagen</p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, hasta 10MB
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="/image"
                onChange={handleImageChange}
              ></input>
            </label>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Título
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder="Ingrese el título de la película"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Año
          </label>
          <input
            id="year"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus: outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            placeholder="Año"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Valoración
          </label>
          <input
            id="rating"
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus: outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            placeholder="0-10"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
