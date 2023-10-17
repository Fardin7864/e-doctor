import { useState } from "react";

const CategoryForm = () => {

    const [formData, setFormData] = useState({
        category: '',
        subcategory: '',
        time: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        fetch('http://localhost:5000/categorys',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if (result.acknowledged) {
                alert(`Succefully added ${formData.subcategory}!`)
                setFormData({
                    category: '',
                    subcategory: '',
                    time: '',
                })
            }
        })
        // console.log(formData);
      };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-600">
            Subcategory:
          </label>
          <input
            type="text"
            id="subcategory"
            name="subcategory"
            required
            value={formData.subcategory}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-600">
            Time:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}


export default CategoryForm;