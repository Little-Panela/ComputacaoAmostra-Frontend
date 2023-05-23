import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Loading = () => {
    const { t } = useTranslation('common')
    const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        // modalRef.current?.showModal()
        const loadingModal = document.getElementById('loading-modal')
    }, [])

    return (
        <dialog id='loading-modal' ref={modalRef} className='bg-transparent flex justify-center items-center h-screen w-screen'>
            <div onClick={preventAutoClose} className='flex flex-col items-center gap-4 bg-transparent'>
                <img src="/static/img/loading.svg" alt="loading image" className='w-32 animate-rotate'/>
                <span className='font-bold text-3xl'>
                    {t('loading')}
                </span>
            </div>
        </dialog>
    )
}

export default Loading