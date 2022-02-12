import * as React from 'react'
import { Wizard, useWizard } from 'react-use-wizard'
import './Wizard.css'

const wrongAnswers = [
  'Неправильно!',
  'Відповіла на емоціях, тому неправильно',
  'Ей, подумай, а потім тисни',
  'Промахнулась!',
  'Не туди натиснула',
]

const questions = [
  'Потрібно чесно відповідати на питання. Згода?',
  'Чи у Вас найпрекрасніші очі?',
  'Чи Ви талановитий тіктокер?',
  'Чи у Вас більше 2 проектів?',
  'Чи Ви надсилаєте мейли і робите таблиці?',
  'Чи Ви хочете бути багатою і успішною?',
  'Чи Ви мрійниця?',
  'Чи Ваш пароль містить числа 12 або 17?',
  'Чи Ви летите на Мальту найближчим часом?',
  'Чи Ви часто говорите "Ммммммммммм"?',
  'Чи у Вас найсолодші губи?',
  'Ви - та сама смілива, розумна і неймовірна Анастасія! І тут дещо для Вас є...',
]

const Poem = () => {
  const content = `Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю

Теперь я здесь перед тобою снова
И держа руку твою
Хочу сказать эти три слова
Я тебя люблю
`

  const sharePoem = () => {
    if (navigator && navigator.share) {
      navigator.share(content)
    }
  }

  return (
    <>
      <div className='poem'>{content}</div>
      <div className='buttons'>
        <button className='button primary' onClick={sharePoem}>
          {'❤️'}
        </button>
      </div>
    </>
  )
}

const Step = ({ index, question }) => {
  const [poemVisible, setPoemVisible] = React.useState(false)
  const { isLastStep, nextStep } = useWizard()

  const noAnswerPressed = () => {
    const wrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]
    alert(wrongAnswer)
  }

  if (isLastStep) {
    if (poemVisible) {
      return <Poem />
    }

    return (
      <>
        <div className='question'>{question}</div>
        <div className='buttons'>
          <button className='button primary' onClick={() => setPoemVisible(true)}>
            {'Подивитись'}
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='question'>{question}</div>
      <div className='buttons'>
        {index !== 0 && (
          <button className='button' onClick={noAnswerPressed}>
            {'Ні'}
          </button>
        )}
        <button className='button primary' onClick={() => nextStep()}>
          {'Так'}
        </button>
      </div>
    </>
  )
}

const WizardWrapper = () => (
  <div className='container'>
    <Wizard>
      {questions.map((question, i) => (
        <Step key={i} index={i} question={question} />
      ))}
    </Wizard>
  </div>
)

export default WizardWrapper
