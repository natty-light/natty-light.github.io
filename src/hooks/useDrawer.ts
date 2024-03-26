import { useState } from 'react';

type UseDrawerReturn = {
    open: () => void;
    close: () => void;
    isOpen: boolean;
};

const useDrawer = (): UseDrawerReturn => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { isOpen, open, close };
};

export default useDrawer;
