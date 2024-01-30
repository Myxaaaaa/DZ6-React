import React from 'react'
import './styles/skills.css'
import reactLogo from "../media/reactLogo.png"
import htmlLogo from "../media/html.png"
import cssLogo from "../media/css.png"
import sassLogo from "../media/sass.png"
import nodeLogo from "../media/nodeJS.png"
import jsLogo from "../media/javaScript.png"
import djangoLogo from "../media/django.png"
import typeScriptlogo from "../media/typeScript.png"

const Skills = () => {
    const skillsDescription = [
        { logo: reactLogo, title: 'React', description: 'Библиотека для создания пользовательских интерфейсов. Позволяет эффективно обновлять и отображать данные в реальном времени.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/React' },
        { logo: htmlLogo, title: 'HTML', description: 'Основной язык разметки веб-страниц. Определяет структуру содержимого и используется для создания элементов на веб-странице.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/HTML' },
        { logo: cssLogo, title: 'CSS', description: 'Язык стилей, который определяет внешний вид и форматирование элементов веб-страницы. Используется для создания красивого и структурированного дизайна.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/CSS' },
        { logo: sassLogo, title: 'Sass', description: 'Препроцессор CSS, предоставляющий дополнительные возможности, такие как переменные, вложенные правила и многие другие, упрощая написание стилей.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/Sass' },
        { logo: nodeLogo, title: 'Node.js', description: 'Среда выполнения JavaScript на сервере. Позволяет создавать масштабируемые и эффективные веб-приложения, используя JavaScript.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/Node.js' },
        { logo: jsLogo, title: 'JavaScript', description: 'Язык программирования, используемый для создания интерактивных веб-страниц. Является ключевым компонентом современного веб-разработчика.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/JavaScript' },
        { logo: djangoLogo, title: 'Django', description: 'Фреймворк для создания веб-приложений на языке Python. Предоставляет множество инструментов для упрощения разработки.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/Django' },
        { logo: typeScriptlogo, title: 'TypeScript', description: 'Язык программирования, являющийся надмножеством JavaScript с добавлением статической типизации. Обеспечивает более строгую структуру кода и поддержку интеллектуальных сред разработки.', wikipediaUrl: 'https://ru.wikipedia.org/wiki/TypeScript' },
    ]

    return (
        <div className='main'>
            <h1 style={{width: 500, textAlign: "center"}}>Что я изучаю:</h1>
            <div className='logoSkills'>
                {skillsDescription.map((skill, index) => (
                    <div key={index} className='logoContainer'>
                        <a href={skill.wikipediaUrl} target="_blank" rel="noopener noreferrer">
                            <img className='logo' src={skill.logo} alt={skill.title} />
                        </a>
                        <h2 className='typing-text'>{skill.title}</h2>
                        <p className='typing-text'>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
