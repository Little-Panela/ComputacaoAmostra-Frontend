import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Loading = () => {
    const { t } = useTranslation('common')
    const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        modalRef.current?.removeAttribute('open')
        modalRef.current?.showModal()
    }, [])

    return (
        <dialog id='loading-modal'ref={modalRef} className='bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-60'>
            <div onClick={preventAutoClose} className='flex flex-col items-center gap-4 bg-transparent overflow-hidden'>
                <img src="/static/img/loading.svg" alt="loading image" className='w-20 animate-rotate'/>
                <span className='font-bold text-3xl text-left'>
                    {t('loading')}
                </span>
            </div>
        </dialog>
    )
}

export default Loading