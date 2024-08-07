import styles from './Footer.module.css'

const Footer = () => {
    return (<footer className={`fixed bottom-0 left-0 w-full text-white text-center p-4 ${styles.Footer}`}>
        <span>
            <p>© All rights to this website are reserved to McDonald</p>
            Improvise, Adapt, Overcome
        </span>
    </footer>
    )
}

export default Footer