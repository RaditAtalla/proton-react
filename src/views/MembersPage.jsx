import { Briefcase, Eye, Home, Search, Trash2, User } from "lucide-react";

export default function MembersPage() {
    return (
        <>
            <header className="flex items-center gap-2 px-10 py-4 fixed w-full z-2">
                <img src="/src/assets/logo.png" alt="Logo KPM" width={60} />
                <div>
                    <p className="text-xl font-bold">
                        Korps Protokol Mahasiswa
                    </p>
                    <p className="text-lg text-gray-600 leading-4">
                        Universitas Telkom
                    </p>
                </div>
            </header>
            <main className=" bg-gray-50 relative grid grid-cols-4">
                <section className="flex justify-center mt-60">
                    <div className="fixed">
                        <nav className="flex flex-col gap-4 bg-white px-4 py-8 border-red-200 border rounded-md shadow">
                            <div className="flex items-center gap-4 p-2">
                                <Home />
                                <p>Home</p>
                            </div>
                            <div className="flex items-center gap-4 p-2">
                                <Briefcase />
                                <p>Events</p>
                            </div>
                            <div className="flex items-center gap-4 p-2 rounded bg-red-100/50 border-b-2 border-red-300">
                                <User />
                                <p>Members</p>
                            </div>
                        </nav>
                        <div className="flex items-center gap-2 px-4 py-2 mt-4 bg-white rounded-md border border-red-200 shadow">
                            <img
                                src="/src/assets/profil.jpg"
                                alt="Foto Profil"
                                className="rounded-full object-cover size-12"
                            />
                            <div>
                                <p className="font-bold">
                                    Raditya Atallahasyrif Rachmadie
                                </p>
                                <p className="leading-4 text-gray-700 text-sm">
                                    Kepala Departemen Internal
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full col-span-3 flex flex-col justify-start mt-60 pe-10 gap-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Members</h1>
                        <div className="flex items-stretch gap-2">
                            <input
                                type="text"
                                className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 w-96 focus:border-red-600 transition-colors"
                                placeholder="Search..."
                            />
                            <button className="bg-red-300/50 p-2 rounded-lg">
                                <Search />
                            </button>
                            <button className="bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg border-gray-100 rounded-2xl p-8 relative overflow-x-auto border border-default">
                        <table class="w-full text-sm text-left rtl:text-right text-body">
                            <thead class="text-sm text-body border-y rounded-base border-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        No.
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Full Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Position
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        NIM
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Prodi
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Faculty
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Batch
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-2 font-bold"
                                    >
                                        Phone Num
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 font-bold"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 font-bold"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-300">
                                    <td scope="row" class="px-6 py-6">
                                        1
                                    </td>
                                    <th class="px-6 py-6 font-medium text-heading whitespace-nowrap">
                                        Raditya Atallahasyrif Rachmadie
                                    </th>
                                    <td class="px-6 py-6">Kepala Departemen Internal</td>
                                    <td class="px-6 py-6">
                                        103022430007
                                    </td>
                                    <td class="px-6 py-6">
                                        S-1 Rekayasa Perangkat Lunak
                                    </td>
                                    <td class="px-6 py-6">FIF</td>
                                    <td class="px-6 py-6">2024</td>
                                    <td class="px-6 py-6">0812-6215-6159</td>
                                    <td class="px-6 py-6">radityaderachmadie@gmail.com</td>
                                    <td class="px-6 py-6 flex gap-2">
                                        <Eye />
                                        <Trash2 />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}
