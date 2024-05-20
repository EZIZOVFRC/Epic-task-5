
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { Formik } from 'formik';
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        const deleteData=(itemId)=>{
            axios.delete(`http://localhost:8080/api/products/${itemId}`).then((res)=>{
                const newData=data.filter((item=>item._id!==itemId))
                setdata([...newData])
            })
        }
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                
                <Formik
       initialValues={{ title: '', image: '',desc:'',price:'' }}
       
       onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:8080/api/products/',{
            id:uuidv4(),
            title:values.title,
            image:values.image,
            price:values.price,
            desc:values.desc,
        }).then((res)=>{
            console.log(res);
            setdata([...res.data])
        })
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             placeholder='title...'
           />
           <input
           placeholder='image...'
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
            <input
            placeholder='price...'
             type="text"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
            <input
            placeholder='desc...'
             type="text"
             name="desc"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
           />
           <button type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>
     <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

        {data &&
            data.map((item) => (
              <tr key={item._id}>
                <th scope="row">
                  <img src={item.image} alt="" style={{ width: "60px" }} />
                </th>
                <td>{item.title}</td>
                <td>{item.price}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                    deleteData(item._id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

        </tbody>


      </table>
        </>
        )
    }
    
    export default Add
        