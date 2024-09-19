import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CurrentUser {
    name: string;
    email: string;
    admin: boolean;
    id: number;
}

interface UserContextType {
    currentUser: CurrentUser | null;
    setCurrentUser: (arg: CurrentUser) => void;
    logOutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

    useEffect(() => {
		const user = localStorage.getItem('user')
		if (user) {
			setCurrentUser(JSON.parse(user))
		}
	}, [])

    const logOutUser = () => {
        setCurrentUser(null);
        localStorage.removeItem('user')
		localStorage.clear()
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, logOutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useCurrentUser must be used within a UserProvider');
    }
    return context;
};
