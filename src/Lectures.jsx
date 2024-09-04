import React from 'react';
import './Lectures.css';
import {Link} from 'react-router-dom';


function Lectures () {




    //https://youtu.be/NHll_dwZthY



    return (
        <div className='containerLectures'>
            <div className='lecturesnavbar'>
                <div className='lecturesnavbarContainer'>
                    <h5 className='lecturesnavItem'>
                        <Link to='/' className='lecturesnavItem'>Home</Link>
                        <Link to='/Lectures' className='lecturesnavItem'>Lectures</Link>
                        <Link to='/Papers' className='lecturesnavItem'>Papers</Link>
                        <Link to='/Projects' className='lecturesnavItem'>Projects</Link>
                        <Link to='/Courses' className='lecturesnavItem'>Courses</Link>
                        <Link to='/Contact' className='lecturesnavItem'>Contact</Link>
                    </h5>
                </div>
            </div>
            <div className='topHalf'>
                

                <div className='title'>
                    <h1 className='titleText'>Lectures</h1>
                </div>
                <div className='subjects'>
                    <div className='subjectsCont'>
                        <a href='#ethicsSect' style={{textDecoration:'none'}}>
                            <div className='subjectsText'> Ethics</div>
                        </a>
                    </div>
                    <div className='subjectsCont'>
                        <a href='#logicSect' style={{textDecoration:'none'}}>
                            <div className='subjectsText'>Logic</div>
                        </a>
                    </div>
                    <div className='subjectsCont'>
                        <a href='#ancientSect' style={{textDecoration:'none'}}>
                            <div className='subjectsText' style={{textAlign: 'center'}}>Ancient 
                            <br></br>
                            Philosophy</div>
                        </a>
                    </div>

                    <div className='subjectsCont'>
                    <a href='#medievaltSect' style={{textDecoration:'none'}}>
                        <div className='subjectsText' style={{textAlign: 'center'}}>Medieval 
                        <br>
                        </br>Philosophy</div>
                    </a>
                    </div>
                    <div className='subjectsCont'>
                        <a href='#modernSect' style={{textDecoration:'none'}}>
                            <div className='subjectsText' style={{textAlign: 'center'}}>Modern
                            <br>
                            </br>Philosophy</div>
                        </a>
                    </div>
                </div>  
            </div>
            <div className='bottomHalf'>
                <div className='subjectSect' id='ethicsSect'>
                    <div className='sectionTitleRow'>
                        <div className='leftSectionLine'></div>
                        <div className='sectionTitle'>Ethics</div>
                        <div className='rightSectionLine'></div>
                    </div>
                    
            
                    <Link to='https://www.youtube.com/playlist?list=PLtVBlr9u2bkpe40WTvGOW8R5SthtIwYfa' className='topicRow' target='_blank'>
                        <div className='crPicture'></div>
                        <div className='topicTitle'>Cultural Relativism
                        </div>
                        
                    </Link>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <div className='topicRow'>
                        <div className='subjPicture'></div>
                        <div className='topicTitle'>Subjectivism
                            <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkrQE5Tuf56lSt7RO-9MQ83m' target='_blank' style={{textDecoration:'none'}}>
                                <div className='subCategory' style={{width:'25vmax'}}>Hume's Moral Subjectivism
                                </div>
                            </a>

                            <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkqtHoPxlBQfE4LICFlM7-ZX' target='_blank' style={{textDecoration:'none'}}>
                                <div className='subCategory'>General
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkpYS4RN7JoaTtxNohC47ml2' target='_blank' style={{textDecoration:'none'}}>
                    <div className='topicRow'>
                        <div className='realismPicture'>
                        </div>
                        <div className='topicTitle'>Moral Realism
                        </div>
                    </div>
                    </a>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <div className='topicRow'>
                        <div className='dctPicture'></div>
                        <div className='topicTitle'>Divine Command Theory
                            <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkrQE5Tuf56lSt7RO-9MQ83m' target='_blank' style={{textDecoration:'none'}}>
                                <div className='subCategory'>Plato's Euthyphro
                                </div>
                            </a>
                            <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkpMhp1x_LrajpS8Gkw2uHfU' target='_blank' style={{textDecoration:'none'}}>  
                                <div className='subCategory'>General
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <div className='topicRow'>
                        <div className='utilPicture'></div>
                        <div className='topicTitle'>Utilitarianism
                            <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkptjicb0XdWjVaK4RdfUOV-' target='_blank' style={{textDecoration:'none'}} >
                                <div className='subCategory' >Mill's Utilitarianism</div>
                            </a>

                            <a href="https://www.youtube.com/playlist?list=PLtVBlr9u2bkoi_3STwBQxEoU2qrGm0izZ" target='_blank' style={{textDecoration:'none'}}>
                                <div 
                                className='subCategory'>General</div>
                            </a>
                        </div>
                    </div>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <a href='https://youtube.com/playlist?list=PLtVBlr9u2bkoWCPtnKc1r1Z6pvuqokR6V&si=79xy_tsB-mplmvgW' target='_blank' style={{textDecoration: 'none'}}>
                        <div className='topicRow'>
                            <div className='ncPicture'></div>
                            <div className='topicTitle'>Non-Consequentialism
                                <a href="https://www.youtube.com/playlist?list=PLtVBlr9u2bkoi_3STwBQxEoU2qrGm0izZ" target='_blank' style={{textDecoration:'none'}}>
                                </a>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='subjectSect' id='logicSect'>
                    <div className='sectionTitleRow'>
                        <div className='leftSectionLine'></div>
                        <div className='sectionTitle'>Logic</div>
                        <div className='rightSectionLine'></div>
                    </div>
                    
                    <Link to='https://www.youtube.com/playlist?list=PLtVBlr9u2bkqapyWj1bsCh00_6oFiheqg' className='topicRow' target='_blank'>
                        <div className='logicPicture'></div>
                        <div className='topicTitle'>Introduction
                            <div className='logicExplanation'>Arguments, Statements, Validity, Soundness, Strength, Coherence, Counterexample Method
                            </div>
                        </div>
                        
                    </Link>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <Link to='https://www.youtube.com/playlist?list=PLtVBlr9u2bkqidCeSHtGEiXb95gvUMjYf' className='topicRow' target='_blank'>
                        <div className='plPicture'></div>
                        <div className='topicTitle'>Propositional Logic
                        </div>
                    </Link>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>
                </div>

                <div className='subjectSect' id='ancientSect'>
                    <div className='sectionTitleRow'>
                        <div className='leftSectionLine'></div>
                        <div className='sectionTitle'>Ancient<br></br> Philosophy</div>
                        <div className='rightSectionLine'></div>
                    </div>
                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkrbRoITgF1q2eSoCbfeBkzq' target='_blank' style={{textDecoration:'none'}}>
                        <div className='topicRow'>
                            <div className='republicPicture'></div>
                            <div className='topicTitle'>Plato's Republic Book 1
                            </div>
                        </div>
                    </a>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkrQE5Tuf56lSt7RO-9MQ83m' target='_blank' style={{textDecoration:'none'}}>
                        <div className='topicRow'>
                            <div className='euthPicture'></div>
                            <div className='topicTitle'>Plato's Euthyphro
                            </div>
                        </div>
                    </a>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkoYtmz-Gme5KRj7FLCqEYDa' target='_blank' style={{textDecoration:'none'}}>
                        <div className='topicRow'>
                            <div className='aristPicture'></div>
                            <div className='topicTitle'>Aristotle's Nicomachean Ethics
                            </div>
                    
                        </div>
                    </a>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>
                </div>

                <div className='subjectSect' id='medievalSect'>
                    <div className='sectionTitleRow'>
                            <div className='leftSectionLine'></div>
                            <div className='sectionTitle'>Medieval<br></br> Philosophy</div>
                            <div className='rightSectionLine'></div>
                    </div>
                    <div className='topicRow'>
                        <div className='augPicture'></div>
                        <div className='topicTitle'>Augustine's Confessions
                        </div>
                    
                    </div>
                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>
                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkqRY4AVuraK2haAQ8D58fUK' className='topicRow' target='_blank'>
                            <div className='boethiusPicture'></div>
                                <div className='topicTitle'>Boethius Consolation of Philosophy
                            </div>
                    </a>
                    

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div> 
                </div> 
                <div className='subjectSect' id='modernSect'>
                    <div className='sectionTitleRow'>
                            <div className='leftSectionLine'></div>
                            <div className='sectionTitle'>Modern<br></br> Philosophy</div>
                            <div className='rightSectionLine'></div>
                    </div>
                    <div className='topicRow'>
                        <div className='descPicture'></div>
                        <div className='topicTitle'>Descartes' Meditations
                        </div>
                    </div>
                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>

                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkrQE5Tuf56lSt7RO-9MQ83m' target='_blank' style={{textDecoration:'none'}}>
                        <div className='topicRow'>
                            <div className='humePicture'></div>
                            <div className='topicTitle'>Hume's Moral Subjectivism
                            </div>
                        </div>
                    </a>

                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>
                    <a href='https://www.youtube.com/playlist?list=PLtVBlr9u2bkptjicb0XdWjVaK4RdfUOV-' target='_blank' style={{textDecoration:'none'}} >

                        <div className='topicRow'>
                            <div className='millPicture'></div>
                            <div className='topicTitle'>Mill's Utilitarianism
                            </div>
                        </div>
                    </a>
                    <div className='betweenRow'>
                        <div className='betweenBox'></div>
                    </div>
                </div>
  
                
            </div>
        </div>
        )
    }

    export default Lectures