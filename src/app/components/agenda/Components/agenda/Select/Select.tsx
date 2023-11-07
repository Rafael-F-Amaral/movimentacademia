



import styles from './Select.module.css'

function SelectBasicExample() {
    return (
        <div className={styles.containerInput}>
            <span>Horário</span>
            <input
                className={styles.selectInput}
                type="time"
                min="09:00"
                max="18:00"
            />
        </div>
    );
}

export default SelectBasicExample;