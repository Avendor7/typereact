import React, {useState, createContext, FC, useContext} from "react";

interface SelectedDateInterface {
    selectedDate: Date,
    setDate: DateSetter
}

export type DateSetter = (newDate:Date)=>void;

export const SelectedDateContext = createContext<SelectedDateInterface>({
    selectedDate:new Date(),
    setDate:() =>{}
});

export const useSelectedDate = ():[Date,DateSetter] =>{
    const {selectedDate,setDate} = useContext(SelectedDateContext);
    return [selectedDate, setDate];
}

export const SelectedDateProvider:FC = ({children}) =>{

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    function setDate(newSelectedDate: Date){
        setSelectedDate(newSelectedDate);
        
    }

    return(
        <SelectedDateContext.Provider value={{selectedDate,setDate}}>
            {children}
        </SelectedDateContext.Provider>
    );
}