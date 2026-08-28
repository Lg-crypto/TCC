import styles from './registerCard.module.css'
import { LuWallet, LuCreditCard, LuHouse, LuShoppingCart, LuTv, LuCar, LuUtensils } from "react-icons/lu";




interface RegisterCardProps {
    isGain: boolean,
    value: number,
    description: string,
    date: string, // <- Tipagem temporaria
    destination_or_source?: string
}

const typesOfDestination = [
    {
        name: 'Salary',
        icon: <LuWallet size={30}/>
    },
    {
        name: 'Other',
        icon: <LuCreditCard size={30}/>
    },
    {
        name: 'House',
        icon: <LuHouse size={30}/>
    },
    {
        name: 'Shopping',
        icon: <LuShoppingCart size={30}/>
    },
    {
        name: 'Entertainment',
        icon: <LuTv size={30}/>
    },
    {
        name: 'Transport',
        icon: <LuCar size={30}/>
    },
    {
        name: 'Food',
        icon: <LuUtensils size={30}/>
    }
]
    
export default function RegisterCard ({isGain, value, description, date, destination_or_source}:RegisterCardProps){

    const typeOfGainOrExpense = typesOfDestination.find(
        item => item.name === destination_or_source
    )
    return(
        <div className={styles.registerCard}>
            <div className={styles.rightSide}>
                <div className={styles.icon}>
                    {typeOfGainOrExpense?.icon}
                </div>
                <div className={styles.description}>
                    <p className={styles.cardTitle}>{description}</p>
                    <p className={styles.caption}>{(isGain? 'Gain' : 'Expense')}</p>
                    <p className={styles.caption}>{date}</p>
                </div>
            </div>
            <div className={(isGain? styles.gainValue : styles.expenseValue)}>{value}</div>
        </div>
    )
}
