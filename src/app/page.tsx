"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

function HomePage() {
  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.set("title", title);
      data.set("skills", JSON.stringify(skills));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(res);

      if (res.ok) {
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSkillsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-zinc-950 p-5">
        <h1 className="text-4xl text-center my-4">Upload a file</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
            value={title}
            onChange={handleTitleChange}
          />
          <div>
            <label className="mr-2">
              <input
                type="checkbox"
                value="PHP"
                checked={skills.includes("PHP")}
                onChange={handleSkillsChange}
              />
              PHP
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="JavaScript"
                checked={skills.includes("JavaScript")}
                onChange={handleSkillsChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="MySQL"
                checked={skills.includes("MySQL")}
                onChange={handleSkillsChange}
              />
              MySQL
            </label>
          </div>

          <button
            className="bg-green-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
            disabled={!file}
          >
            Upload
          </button>
        </form>
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            className="w-64 h-64 object-contain mx-auto"
            width={256}
            height={256}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
