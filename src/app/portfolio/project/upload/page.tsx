"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import '../../../../app/quil.css';
import { db, storage } from '@/app/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ProjectUpload = () => {
    const [title, setTitle] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [category, setCategory] = useState('');
    const [isTopProject, setIsTopProject] = useState(false);
    const [description, setDescription] = useState('');
    const [stack, setStack] = useState('');
    const [images, setImages] = useState<FileList | null>(null);
    const router = useRouter();

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImages(event.target.files);
    };

    useEffect(() => {
        // Prompt the user for the password
        const password = prompt("Enter the password to access this page:");


        // Check if the password is correct
        if (password !== process.env.NEXT_PUBLIC_ADMIN_UPLOAD_SECRET_PASSWORD) {
            // Redirect to the home page if the password is incorrect
            router.push('/');
        }
    }, [router]);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const uploadedImageUrls: string[] = [];

            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const imageRef = ref(storage, `projects/${image.name}`);
                    await uploadBytes(imageRef, image);
                    const downloadURL = await getDownloadURL(imageRef);
                    uploadedImageUrls.push(downloadURL);
                }
            }

            await addDoc(collection(db, 'projects'), {
                title,
                description,
                isTopProject,
                youtubeUrl,
                category,
                stack,
                liveUrl,
                githubUrl,
                images: uploadedImageUrls,
                createdAt: new Date(),
            });
            setTitle('');
            setDescription('');
            setIsTopProject(false);
            setImages(null);
            setYoutubeUrl('');
            setLiveUrl('');
            setGithubUrl('');
            setCategory('');
            setStack('');

            // router.push('/');
            alert('Done');

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <>
            <div className="lg:max-w-4xl mx-auto p-8 bg-main w-[90%]">
                <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
                <form onSubmit={handleSubmit} method='POST'>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Youtube link (optional)</label>
                        <input
                            type="url"
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Live link (optional)</label>
                        <input
                            type="url"
                            value={liveUrl}
                            onChange={(e) => setLiveUrl(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Github link (optional)</label>
                        <input
                            type="url"
                            value={githubUrl}
                            onChange={(e) => setGithubUrl(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Stacks</label>
                        <input
                            type="text"
                            value={stack}
                            onChange={(e) => setStack(e.target.value)}
                            className="mt-1 block w-full border  rounded-md shadow-sm py-2 px-3 bg-main focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <ReactQuill value={description} onChange={setDescription} className="mt-1 h-[20vh]" />
                    </div>

                    <div className="mb-4 pt-10">
                        <label className="block text-sm font-medium text-gray-700">Upload Images</label>
                        <input
                            type="file"
                            onChange={handleImageUpload}
                            multiple
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 "
                            accept='image/*'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={isTopProject}
                                onChange={(e) => setIsTopProject(e.target.checked)}
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="ml-2">Is Top Project</span>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            // onClick={() => handleSubmit()}
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProjectUpload;
