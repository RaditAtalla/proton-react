import {
    Briefcase,
    Eye,
    Home,
    LogOut,
    Search,
    Trash2,
    User,
} from "lucide-react";

export default function AccountPage() {
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
                            <div className="flex items-center gap-4 p-2">
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
                        <h1 className="text-3xl font-bold">My Account</h1>
                    </div>
                    <div className="grid grid-cols-5 bg-white shadow-lg border-gray-100 rounded-2xl ps-0 p-8 relative">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src="/src/assets/profil.jpg"
                                alt="Foto Profil"
                                className="rounded-full object-cover size-48"
                            />
                            <p className="text-red-700 underline">Ubah Foto Profil</p>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-6 col-span-4 gap-x-6 gap-y-4">
                            <div className="flex flex-col gap-2 col-span-2">
                                <label htmlFor="fName">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="fName"
                                    value={"Raditya Atallahasyrif Rachmadie"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="position">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    value={"Kepala Departemen Internal"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nim">NIM</label>
                                <input
                                    type="text"
                                    id="nim"
                                    value={"103022430007"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Batch</label>
                                <input
                                    type="text"
                                    id="batch"
                                    value={"2024"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Prodi</label>
                                <input
                                    type="text"
                                    id="batch"
                                    value={"S-1 Rekayasa Perangkat Lunak"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Fakultas</label>
                                <input
                                    type="text"
                                    id="batch"
                                    value={"FIF"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Email</label>
                                <input
                                    type="email"
                                    id="batch"
                                    value={"radityaderachmadie@gmail.com"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Phone Num</label>
                                <input
                                    type="text"
                                    id="batch"
                                    value={"0812-6215-6159"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="batch">Password</label>
                                <input
                                    type="password"
                                    id="batch"
                                    value={"password123"}
                                    className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 focus:border-red-600 transition-colors"
                                    disabled
                                />
                            </div>
                            <button className="bg-red-700 text-white font-bold py-2 px-6 rounded-lg col-span-full self-center cursor-pointer hover:bg-red-800 transition-colors">
                                Edit
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
