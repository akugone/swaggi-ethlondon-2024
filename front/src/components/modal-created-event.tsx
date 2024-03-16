import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Svg } from './svg'
import { Button } from './ui/button';

export default function ModalCreatedEvent({isSuccess, isOpen, setOpen}: {isSuccess: boolean, isOpen: boolean, setOpen: (open: boolean) => void}) {
    console.log({isSuccess});

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="flex flex-col items-center relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    { ! isSuccess ? (
                                        <>
                                            <figure className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                                                <Svg.Refresh className="h-6 w-6 text-yellow-600 animate-spin -scale-1" aria-hidden="true" />
                                            </figure>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Event currently being created
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Please be patient, you will be able to collect donations shortly.
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>

                                            <figure className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                                <Svg.Check className="h-6 w-6 text-green-600" aria-hidden="true" />
                                            </figure>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Created event successful
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <Button
                                    size="lg"
                                    type="button"
                                    className="mt-5 sm:mt-6"
                                    onClick={() => setOpen(false)}
                                >
                                    Go back to dashboard
                                </Button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
