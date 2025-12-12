import { MapPin, X } from 'lucide-react';

interface MapModalProps {
    show: boolean;
    onClose: (value: boolean) => void;
}

function MapModal(
    {show, onClose}: MapModalProps
) {
    if (show) {
        return (
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                <div className="bg-gray-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
                    {/* Modal Sarlavhasi */}
                    <div className="bg-linear-to-r from-cyan-950 via-cyan-700 to-blue-200 p-6 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <MapPin className="w-7 h-7" />
                            Toshkent vil, Zangiota tum, Obod turmush MFY, T.Islomov ko'chasi 4-uy
                        </h3>
                        {/* Yopish Tugmachasi */}
                        <button
                            onClick={() => onClose(false)}
                            className="text-cyan-900 hover:text-gray-200 bg-cyan-700 text-3xl font-bold flex items-center justify-center rounded-lg p-1 hover:bg-white/20 transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Xarita Kontenti (IFRAME) */}
                    <div className="p-4 sm:p-6 h-[60vh]">
                        <div className="w-full h-full bg-gray-800 border-2 border-cyan-700 rounded-xl overflow-hidden">

                            {/* 👇👇👇 Sizning statik iframe joyingiz 👇👇👇 */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24022.71415937988!2d69.09755616200522!3d41.181672782838504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae630d53b3a16b%3A0xeaeb7e47756af5ef!2z0KPRgNGC0LDQsNGD0LssINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1765552415152!5m2!1sru!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }} // React'da style prop'i object sifatida yoziladi
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Embedded Location Map" // Acessibility uchun muhim
                            ></iframe>
                            {/* 👆👆👆 Sizning statik iframe joyingiz 👆👆👆 */}

                        </div>
                    </div>

                    {/* Pastki Qism */}
                    <div className="p-4 sm:p-6 border-t border-gray-700">
                        <p className="text-cyan-400 font-medium text-center">
                            Iltimos, manzilni aniqlash uchun xaritani kattalashtiring yoki siljiting.
                        </p>
                        <button
                            onClick={() => onClose(false)}
                            className="w-full mt-4 bg-linear-to-r from-cyan-900 to-cyan-600 hover:from-cyan-500 hover:to-cyan-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                        >
                            Yopish
                        </button>
                    </div>
                </div>
            </div>

        );
    } else {
        return null;
    }
}

export default MapModal;