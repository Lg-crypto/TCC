import styles from './registerCard.module.css'

interface RegisterCardProps {
    isGain: boolean,
    value: number,
    description: string,
    date: string, // <- Tipagem temporaria
    source?: string,
    destination?: string
}

export default function RegisterCard ({isGain, value, description, date, source, destination}:RegisterCardProps){
    return(
        <div className={(isGain ? styles.gainCard : styles.expenseCard)}>
            <div className={styles.cardLeftSide}>
                {isGain ? "Gain" : "Expense"}
                <p>{description}</p>
                <p>{isGain ? source : destination}</p>
            </div>
            <div className={styles.cardRightSide}>
                <p>{value}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}