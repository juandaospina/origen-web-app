import './ButtonGeneral.css';

interface Props {
    text: string
    route: string
    background: string
    border: string
    textColor: string
}

export const ButtonGeneral = (props: Props) => {

    const { text, route, background, border, textColor } = props;

    return(
        <>
            <button className="button-general" style={{
                background: background,
                border: `2px solid ${border}`
            }}>
                <a style={{
                    color: textColor
                }} href={ route }>
                    { text }
                </a>
            </button>
        </>
    );
}