import React from 'react'
import imgItem from "../../images/img01.png"
import americanFlag from "../../images/img02.jpeg"

const Tablecell = () => {
    return (
        <>
            <div className="list-content-wrapper">
                <ul className="list-content">
                    <div className="content-1">
                        <li className="list-content-item">
                            <input type="checkbox" className="input-content-item__checkbox"></input>
                        </li>
                        <li className="list-content-item list-content-item__main-image-wrapper">
                            <img className="list-content-item__main-image" src={imgItem} alt="big-pic"></img>
                        </li>
                        <li className="list-content-item test">
                            <p className="list-content-item__name">Toddler Fishing Game Gifts for 2 3 Year Old Girl and ...</p>
                            <div className="list-content-item__wrapper">
                                <div className="list-content-item__image-wrapper">
                                    <img className="input-content-item__image" src={americanFlag} alt="flag"></img>
                                </div>
                                <p className="input-content-item__text">B078WLH42J</p>
                                <ul className="input-content-item__list">
                                    <li className="list-content-item__icons">
                                        <i className="fas fa-skull-crossbones"></i>
                                    </li>
                                    <li className="list-content-item__icons">
                                        <i className="fas fa-lock"></i>
                                    </li>
                                    <li className="list-content-item__icons">
                                        <i className="fas fa-th-list"></i>
                                    </li>
                                    <li className="list-content-item__icons">
                                        <i className="fas fa-cubes"></i>
                                    </li>
                                    <li className="list-content-item__icons">
                                        <i className="fas fa-comment-dollar"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </div>
                    <div className="content-2">
                        <li className="list-content-item">
                            <ul className="list-content-item__data-list">
                                <li className="list-content-item__data-item">$5.68</li>
                                <li className="list-content-item__data-item">$5.68</li>
                                <li className="list-content-item__data-item">29%</li>
                                <li className="list-content-item__data-item">192</li>
                                <li className="list-content-item__data-item">$32,813.36</li>
                                <li className="list-content-item__data-item">100%</li>
                                <li className="list-content-item__data-item">9.3</li>
                                <li className="list-content-item__data-item">9.3</li>
                                <li className="list-content-item__data-item">9.3</li>
                                <li className="list-content-item__data-item">9.3</li>
                            </ul>
                        </li>
                        <li className="list-content-item">
                            <ul className="list-content-item__options">
                                <li className="list-content-item__options-item">
                                    <i className="fas fa-folder-plus"></i>
                                </li>
                                <li className="list-content-item__options-item">
                                    <i className="far fa-bell-slash"></i>
                                </li>
                                <li className="list-content-item__options-item">
                                    <i className="fas fa-ellipsis-v"></i>
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
                <div className="details-caret-down">
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </>
    )
}

export default Tablecell
