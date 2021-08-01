import React, {useState, createContext, FC, useContext} from "react";

interface SelectedDateInterface {
    selectedDate: Date,
    setDate: DateSetter
}
//define the type for the selectedDate onChange event
export type DateSetter = (newDate:Date)=>void;

//define the context in accordance to the above interface
export const SelectedDateContext = createContext<SelectedDateInterface>({
    selectedDate:new Date(),
    setDate:() =>{}
});

//helper that uses the context so I don't need to call this in every single place I want to use the date
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