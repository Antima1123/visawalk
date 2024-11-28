import { create } from "zustand"

type props = {
    isOpen: boolean,
    onOpen: ()=> void;
    onClose: ()=> void;
}

export const useOpenShare = create<props>((set) => ({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}));

// to bolo na ye wo hai 