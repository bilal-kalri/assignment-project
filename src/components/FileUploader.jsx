import React from 'react'
import { useDropzone } from 'react-dropzone';

function FileUploader() {
    const { getRootProps, acceptedFiles } = useDropzone();
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
    return (
        <section className="file-uploader-container w-full ">
            <div {...getRootProps({ className: 'dropzone' })} className='w-full h-full flex items-center justify-center flex-col relative'>

                <div>
                    <div className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_3_346)">
                                <path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_346">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Drop an image here</p>
                </div>
                <ul className='absolute files-container'>{files}</ul>
            </div>
        </section>
    )
}

export default FileUploader