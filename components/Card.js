import Link from "next/link";

const Card = (props) => {
    const url = props.petData.img_url;
    const svgUrl = props.petData.type.toLowerCase() === 'gato'
    ? '/cat.svg'
    : props.petData.type.toLowerCase() === 'cachorro'
    ? '/dog.svg'
    : '/other.svg';
    const age = props.petData.age <= 1
    ? '0-1 ano'
    : props.petData.age > 1 && props.petData.age <= 3
    ? '1-3 anos'
    : 'mais de 3 anos';
    const gender = props.petData.gender.toLowerCase() === 'macho'
    ? '♂'
    : '♀';

    return (
        <div className="card-pet-container">
            <img className="card-pet type" src={svgUrl} alt="type-img"></img>
            <img className="card-pet img" src={url} alt="pet-img"></img>
            <h3 className="card-pet type-text">{props.petData.type}</h3>
            <span className="card-pet gender-symbol">{gender}</span>
            <div className="card-pet text">
                <p>Nome: {props.petData.name}</p>
                <p>Raça: {props.petData.breed}</p>
                <p>Idade: {age}</p>
                <p>Localização: {props.petData.location}</p>
            </div>
            <Link href={`/pets/${props.petIds}`}>
                <button className="card-pet btn">Conheça</button>
            </Link>
            <svg width="275" height="350" viewBox="0 0 225 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="54" width="207" height="239" rx="10" fill="white"/>
                <circle cx="47" cy="47" r="47" fill="#E6E7FB"/>
                <circle cx="47" cy="47" r="44" fill="white"/>
                <path d="M150.314 262.818H151.786L155.246 271.27H155.365L158.825 262.818H160.297V273H159.144V265.264H159.044L155.862 273H154.749L151.567 265.264H151.467V273H150.314V262.818ZM165.812 273.159C165.076 273.159 164.441 272.997 163.908 272.672C163.377 272.344 162.968 271.886 162.68 271.3C162.395 270.71 162.252 270.024 162.252 269.241C162.252 268.459 162.395 267.77 162.68 267.173C162.968 266.573 163.369 266.106 163.883 265.771C164.4 265.433 165.003 265.264 165.692 265.264C166.09 265.264 166.483 265.33 166.871 265.463C167.258 265.596 167.611 265.811 167.93 266.109C168.248 266.404 168.501 266.795 168.69 267.283C168.879 267.77 168.974 268.37 168.974 269.082V269.58H163.087V268.565H167.78C167.78 268.134 167.694 267.75 167.522 267.412C167.353 267.074 167.111 266.807 166.796 266.612C166.485 266.416 166.117 266.318 165.692 266.318C165.225 266.318 164.821 266.434 164.479 266.666C164.141 266.895 163.881 267.193 163.699 267.561C163.516 267.929 163.425 268.323 163.425 268.744V269.42C163.425 269.997 163.525 270.486 163.724 270.887C163.926 271.285 164.206 271.588 164.564 271.797C164.922 272.002 165.338 272.105 165.812 272.105C166.12 272.105 166.398 272.062 166.647 271.976C166.899 271.886 167.116 271.754 167.298 271.578C167.48 271.399 167.621 271.177 167.721 270.912L168.854 271.23C168.735 271.615 168.534 271.953 168.253 272.244C167.971 272.533 167.623 272.758 167.209 272.92C166.794 273.08 166.329 273.159 165.812 273.159ZM173.96 273.159C173.224 273.159 172.59 272.997 172.056 272.672C171.526 272.344 171.116 271.886 170.828 271.3C170.543 270.71 170.4 270.024 170.4 269.241C170.4 268.459 170.543 267.77 170.828 267.173C171.116 266.573 171.517 266.106 172.031 265.771C172.548 265.433 173.151 265.264 173.841 265.264C174.239 265.264 174.631 265.33 175.019 265.463C175.407 265.596 175.76 265.811 176.078 266.109C176.396 266.404 176.65 266.795 176.839 267.283C177.028 267.77 177.122 268.37 177.122 269.082V269.58H171.236V268.565H175.929C175.929 268.134 175.843 267.75 175.67 267.412C175.501 267.074 175.259 266.807 174.945 266.612C174.633 266.416 174.265 266.318 173.841 266.318C173.373 266.318 172.969 266.434 172.628 266.666C172.29 266.895 172.03 267.193 171.847 267.561C171.665 267.929 171.574 268.323 171.574 268.744V269.42C171.574 269.997 171.673 270.486 171.872 270.887C172.074 271.285 172.354 271.588 172.712 271.797C173.07 272.002 173.486 272.105 173.96 272.105C174.268 272.105 174.547 272.062 174.795 271.976C175.047 271.886 175.264 271.754 175.447 271.578C175.629 271.399 175.77 271.177 175.869 270.912L177.003 271.23C176.883 271.615 176.683 271.953 176.401 272.244C176.119 272.533 175.771 272.758 175.357 272.92C174.943 273.08 174.477 273.159 173.96 273.159ZM182.228 265.364V266.358H178.271V265.364H182.228ZM179.424 263.534H180.597V270.812C180.597 271.144 180.645 271.393 180.741 271.558C180.841 271.721 180.967 271.83 181.119 271.886C181.275 271.939 181.439 271.966 181.611 271.966C181.741 271.966 181.847 271.959 181.93 271.946C182.012 271.929 182.079 271.916 182.128 271.906L182.367 272.96C182.288 272.99 182.177 273.02 182.034 273.05C181.891 273.083 181.711 273.099 181.492 273.099C181.161 273.099 180.836 273.028 180.518 272.886C180.203 272.743 179.941 272.526 179.732 272.234C179.527 271.943 179.424 271.575 179.424 271.131V263.534Z" fill="white"/>
            </svg>
        </div>
    )
}

export default Card;