export default function LoginPage() {
    return (
        <main className="flex justify-center items-center h-screen bg-gray-50">
            <div className="shadow-xl">
                <div className="bg-red-900 flex justify-center items-center border-2 border-red-800 rounded-t-sm p-2">
                    <h2 className="text-white">
                        Masuk menggunakan akun yang disediakan
                    </h2>
                </div>
                <div className="relative flex flex-col items-center gap-10 p-20 pt-10 rounded-2xl rounded-t-none border-2 border-gray-100 bg-white">
                    <img
                        src="/src/assets/logo.png"
                        alt="Logo KPM"
                        width={150}
                    />
                    <form action="" autoComplete="off" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 w-96 focus:border-red-600 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border-b-2 border-gray-300 rounded-sm p-2 focus:outline-0 w-96 focus:border-red-600 transition-colors"
                            />
                        </div>
                        <input
                            type="submit"
                            value={"Login"}
                            className="rounded-sm bg-red-700 text-white font-bold mt-20 p-2 cursor-pointer hover:bg-red-800 transition-colors"
                        />
                    </form>
                </div>
            </div>
        </main>
    );
}
