import styles from "./about.module.css";
import background from "../assets/logo-clara.png";
import image from "../assets/image1.png";
import fotoHigor from "../assets/Higor.png"
import fotoYoshida from "../assets/Yoshida.png"
import fotoHalejandro from "../assets/Halejandro.png"
import fotoCaio from "../assets/Caio.png"

import SideMenu from "../components/layout/sideMenu";


export default function About (){
    return(
        <div className={styles.container}>
            <SideMenu></SideMenu>
            <section className={`${styles.section} ${styles.home}`}>
                <img src={background} alt="Loading error" />
                <h2 className={styles.title}>Sobre o WWallet</h2>
            </section>
            <section className={`${styles.section} ${styles.howstarted}`}>
                <h2 className={styles.title}>Como começou</h2>
                <div className={styles.texts}>
                    <p className={styles.text}>
                        Durante os primeiros meses, o grupo realizou diversas reuniões com o objetivo de definir o tema do projeto, porém, após várias discussões, não conseguiam chegar a um consenso que agradasse a todos os 4 membros da equipe. Após mais algumas conversas ao longo dos meses de março, o Caio relatou ter dificuldades para controlar seus gastos pessoais diante do salário que recebia de seu trabalho informal. A partir desse relato, o Bernardo enxergou uma oportunidade e propôs que essa fosse a temática do projeto: uma aplicação Web voltada para o gerenciamento financeiro pessoal, permitindo que o usuário acompanhe quanto ganha, quanto gasta, quanto sobra ao final do mês e diversas outras funcionalidades que podem ser exploradas ao navegar pelo site.
                    </p>
                </div>
            </section>
            <section className={`${styles.section} ${styles.ourmission}`}>
                <div className={styles.content}>
                    <img  width={960} height={600} src={image} alt="Loading error" />
                    <div>
                        <h2 className={styles.title}>Nossa missão</h2>
                        <ul className={styles.list}>
                            <p className={styles.listDescription}> Controle financeiro para qualquer pessoa</p>
                            <li className={styles.listItem}>Organize receitas e despesas sem complicação.</li>
                            <p className={styles.listDescription}> Visualização inteligente</p>
                            <li className={styles.listItem}>Gráficos claros para acompanhar sua evolução.</li>
                            <p className={styles.listDescription}> Simples e rápido</p>
                            <li className={styles.listItem}>Cadastre movimentações em poucos segundos.</li>
                            <p className={styles.listDescription}> Seus dados protegidos</p>
                            <li className={styles.listItem}>Segurança e privacidade em primeiro lugar.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={`${styles.section} ${styles.aboutus}`}>
                <h2 className={styles.title}>Sobre nós</h2>
                <div className={styles.profiles}>
                    <div className={styles.profile}>
                        <img src={fotoHalejandro} className={styles.profileImage}></img>
                        <div>
                            <h3 className={styles.subtitle}>Francisco Halejandro</h3>
                            <p className={styles.text}>Olá! Meu nome é Halejandro, sou uma pessoa curiosa, criativa e apaixonada por aprender coisas novas. Gosto de encarar desafios como oportunidades para evoluir e estou sempre em busca de aprimorar minhas habilidades, tanto na programação quanto em outras áreas do conhecimento.</p>
                            <p className={styles.text}>Tenho um grande interesse por desenvolvimento web, especialmente utilizando React e TypeScript, e procuro criar interfaces modernas, intuitivas e bem estruturadas, sempre pensando na experiência do usuário e na qualidade do código. Além da tecnologia, gosto de explorar assuntos variados, como futebol, jogos, história da arte, astronomia e acontecimentos atuais, o que me ajuda a desenvolver uma visão mais ampla e a aprender continuamente. Costumo analisar os problemas antes de resolvê-los, buscando entender suas causas e encontrar soluções eficientes e bem elaboradas. Acredito que a evolução vem da curiosidade, da dedicação e da vontade constante de fazer cada vez melhor.</p>
                        </div>
                    </div>
                    <div className={`${styles.profile} ${styles.reverse}`}>
                        <img src={fotoCaio} className={styles.profileImage}></img>
                        <div>
                            <h3 className={styles.subtitle}>Caio de Matos</h3>
                            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, aut! Doloribus cumque omnis optio fugit asperiores culpa sed vel iure exercitationem itaque dolor earum commodi natus harum, facere totam soluta?</p>
                        </div>
                    </div>
                    <div className={styles.profile}>
                        <img src={fotoYoshida} className={styles.profileImage}></img>
                        <div>
                            <h3 className={styles.subtitle}>Bernardo Matos Yoshida</h3>
                            <p className={styles.text}>Olá! Meu nome é Bernardo Matos Yoshida e sou estudante da área de Desenvolvimento de Sistemas com interesse em Engenharia da área de Computação, e tenho afinidades com audiovisual e interesse em mercado global. Tenho buscado desenvolver minhas habilidades por meio de projetos acadêmicos e pessoais, sempre procurando aprender novas tecnologias e aperfeiçoar meus conhecimentos.</p>
                        </div>
                    </div>
                    <div className={`${styles.profile} ${styles.reverse}`}>
                        <img src={fotoHigor} className={styles.profileImage}></img>
                        <div>
                            <h3 className={styles.subtitle}>Higor Gabriel</h3>
                            <p className={styles.text}>Sou aluno do 3º ano do curso técnico em Desenvolvimento de Sistemas. Meu interesse pela área de programação surgiu por meio do contato com profissionais da tecnologia, o que despertou minha vontade de aprender e seguir carreira na área. Durante o curso, desenvolvi familiaridade com o ambiente de desenvolvimento, adquirindo conhecimentos em lógica de programação, conceitos fundamentais e boas práticas, além de fortalecer meu interesse em criar soluções por meio da tecnologia.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}