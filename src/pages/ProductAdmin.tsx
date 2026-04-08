import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ProductAdmin = () => {
    const [images, setImages] = useState([]);

    const onDrop = (acceptedFiles) => {
        const newImages = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        setImages([...images, ...newImages]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    const handleRemoveImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    return (
        <div>
            <h1>Product Image Admin</h1>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag & drop some images here, or click to select files</p>
            </div>
            <div>
                {images.map((file, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img src={file.preview} alt={`Product ${index}`} style={{ width: '100px', height: '100px' }} />
                        <button onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', top: '0', right: '0' }}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAdmin;