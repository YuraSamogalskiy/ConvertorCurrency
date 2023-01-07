import React from 'react'
import styles from './CardCurrency.module.css'

const currencyName = ['USD', 'UAH', 'EUR', 'AFN']

const CardCurrency = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className={styles.container}>
      <div className={styles.AllCardButtons}>
        <div className={styles.buttonsCard}>
          {currencyName.map((cur) => {
            return (
              <button
                onClick={() => onChangeCurrency(cur)}
                className={currency === cur ? styles.buttonCurrency : ''}
              >
                {cur}
              </button>
            )
          })}
        </div>
        <div className={styles.card}>
          <h2>Chosen currency: {currency}</h2>
          <input
            className={styles.inputCurrency}
            value={value}
            type="number"
            onChange={(e) => onChangeValue(e.target.value)}
            placeholder={0}
          />
        </div>
      </div>
    </div>
  )
}

export default CardCurrency
