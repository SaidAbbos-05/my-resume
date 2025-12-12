import { Mail, X } from 'lucide-react';
import { useState } from 'react';

interface SendEmailModalProps {
    show: boolean;
    onClose: (value: boolean) => void;
}

function SendEmailModal(
    { show, onClose }: SendEmailModalProps
) {
    const [emailForm, setEmailForm] = useState({ name: '', email: '', subject: '', message: '' });


    const handleEmailSubmit = (e:any) => {
        e.preventDefault();
        // Email yuborish logikasi
        console.log('Email sent:', emailForm);
        alert('Xabaringiz yuborildi!');
        onClose(false);
        setEmailForm({ name: '', email: '', subject: '', message: '' });
    };


    if (show) {
        return (
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                <div className="bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                    <div className="bg-linear-to-r from-cyan-950 via-cyan-700 to-blue-200 p-6 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Mail className="w-7 h-7" />
                            Xabar Yuborish
                        </h3>
                        <button
                            onClick={() => onClose(false)}
                            className="text-cyan-900 hover:text-gray-200 bg-cyan-700 text-3xl font-bold  flex items-center justify-center rounded-lg hover:bg-white/20 transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                    <form onSubmit={handleEmailSubmit} className="p-6 space-y-4">
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Ismingiz</label>
                            <input
                                type="text"
                                required
                                value={emailForm.name}
                                onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                                className="w-full bg-gray-800 text-white border border-cyan-900 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all"
                                placeholder="Ismingizni kiriting"
                            />
                        </div>
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={emailForm.email}
                                onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                                className="w-full bg-gray-800 text-white border border-cyan-900 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all"
                                placeholder="emailingiz@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Mavzu</label>
                            <input
                                type="text"
                                required
                                value={emailForm.subject}
                                onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                                className="w-full bg-gray-800 text-white border border-cyan-900 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all"
                                placeholder="Xabar mavzusi"
                            />
                        </div>
                        <div>
                            <label className="block text-cyan-400 font-semibold mb-2">Xabar</label>
                            <textarea
                                required
                                value={emailForm.message}
                                onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                                rows={6}
                                className="w-full bg-gray-800 text-white border border-cyan-900 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                                placeholder="Xabaringizni yozing..."
                            ></textarea>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-linear-to-r from-cyan-900 to-cyan-600 hover:from-cyan-500 hover:to-cyan-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                            >
                                Yuborish
                            </button>
                            <button
                                type="button"
                                onClick={() => onClose(false)}
                                className="flex-1 bg-linear-to-r from-cyan-900 to-cyan-600 hover:from-cyan-500 hover:to-cyan-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                Bekor qilish
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    } else {
        return null;
    }
}

export default SendEmailModal;