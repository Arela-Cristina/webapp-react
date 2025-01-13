import { useState } from 'react';

const initialFormData = {
    nome: '',
    text: '',
    vote: '',
}

function FormReview() {

    const [formData, setFormData] = useState([initialFormData])

    //evento per gestioni dei campi dei form 

    function handleChange(e) {
        const { name, value } = e.target

        console.log('name', name, 'value', value)
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (

        < div className="container border my-6 rounded-lg" >
            <div className='border rounded-lg'>
                <div className=' bg-gray-200 px-4 py-2'>
                    <strong>
                        Aggiungi recensione
                    </strong>
                </div>
            </div>
            <div className='p-4'>
                <form className='flex flex-col gap-3'>
                    <p className='form-control'>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder='Anonymous' name='name' id='name' value={formData.name} onChange={handleChange} />
                    </p>
                    <p className='form-control'>
                        <label htmlFor="text">Recensione</label>
                        <textarea rows="4" name="text" id="text" placeholder='Scrivi la tua recensione' value={formData.text} onChange={handleChange}></textarea>
                    </p>
                    <p className='form-control'>
                        <label htmlFor="vote">Voto</label>
                        <select name="vote" id="vote" value={formData.vote} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <button className='self-end bg-blue-950 hover:bg-blue-800 text-white h-10 rounded-lg px-6'>Invia</button>
                </form>
            </div>
        </div >

    )
}

export default FormReview;