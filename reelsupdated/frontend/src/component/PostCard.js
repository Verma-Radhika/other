import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
export default function PostCard() {
    const [data, setData] = useState([])
    const imagePost = () => {
        fetch("http://localhost:5000/videos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        imagePost()
    }, [])
    return (
        <>
            {data && data.map((item) => (
                <>
                    <div class="news-feed news-feed-post">
                        <div class="post-header d-flex justify-content-between align-items-center">
                            <div class="image">
                                <a href="my-profile.html"><img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
                                    class="rounded-circle" alt="image" /></a>
                            </div>
                            <div class="info ms-3">
                                <span class="name"><a href="my-profile.html">Julie R. Morleyv</a></span>
                                <span class="small-text"><a href="#">10 Mins Ago</a></span>
                            </div>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"><i
                                        class="flaticon-menu"></i></button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item d-flex align-items-center" href="#"><i
                                        class="flaticon-edit"></i> Edit Post</a></li>
                                    <li><a class="dropdown-item d-flex align-items-center" href="#"><i
                                        class="flaticon-private"></i> Hide Post</a></li>
                                    <li><a class="dropdown-item d-flex align-items-center" href="#"><i
                                        class="flaticon-trash"></i> Delete Post</a></li>
                                </ul>
                            </div>
                        </div>
{/* .................................. for usong self reels ................................ */}
                        <div>  </div>
{/* ................................................................................ */}
                        <div class="post-body">
                            <p>{item.description}</p>
                            <div class="post-image">
                                <video width="640" height="360" controls autoplay>
                                    <source src={item.videoUrl} type="video/mp4" />
                                </video>

                            </div>
                            <ul class="post-meta-wrap d-flex justify-content-between align-items-center">
                                <li class="post-react">
                                    <a href="#"><i class="flaticon-like"></i><span>Like</span> <span
                                        class="number">0 </span></a>

                                    <ul class="react-list">
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-1.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-2.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-3.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-4.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-5.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-6.png" alt="Like" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/react/react-7.png" alt="Like" /></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="post-comment">
                                    <a href="#"><i class="flaticon-comment"></i><span>Comment</span> <span
                                        class="number">0 </span></a>
                                </li>
                                <li class="post-share">
                                    <a href="#"><i class="flaticon-share"></i><span>Share</span> <span
                                        class="number">0 </span></a>
                                </li>
                            </ul>
                          
                        </div>
                    </div>
                </>
            ))}
        </>

    )
}


// <div class="post-comment-list">
//                     <div class="comment-list">
//                         <div class="comment-image">
//                             <a href="my-profile.html"><img src="assets/images/user/user-33.jpg"
//                                     class="rounded-circle" alt="image"/></a>
//                         </div>
//                         <div class="comment-info">
//                             <h3>
//                                 <a href="my-profile.html">David Moore</a>
//                             </h3>
//                             <span>5 Mins Ago</span>
//                             <p>Donec rutrum congue leo eget malesuada nulla quis lorem ut libero
//                                 malesuada feugiat donec rutrum congue leo eget malesuada donec rutrum
//                                 congue leo eget malesuada. Praesent sapien massa convallis a
//                                 pellentesque non nisi curabitur non nulla sit amet nisl tempus convallis
//                                 lectus.</p>
//                             <ul class="comment-react">
//                                 <li><a href="#" class="like">Like(2)</a></li>
//                                 <li><a href="#">Reply</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="comment-list">
//                         <div class="comment-image">
//                             <a href="my-profile.html"><img src="assets/images/user/user-34.jpg"
//                                     class="rounded-circle" alt="image"/></a>
//                         </div>
//                         <div class="comment-info">
//                             <h3>
//                                 <a href="my-profile.html">Claire P. Toy</a>
//                             </h3>
//                             <span>45 Mins Ago</span>
//                             <p>Donec rutrum congue leo eget malesuada praesent sapien massa convallis a
//                                 pellentesque nec egestas non nisi curabitur non nulla sit amet nisl
//                                 tempus convallis quis ac lectus.</p>
//                             <ul class="comment-react">
//                                 <li><a href="#" class="like">Like(12)</a></li>
//                                 <li><a href="#">Reply</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="comment-list">
//                         <div class="comment-image">
//                             <a href="my-profile.html"><img src="assets/images/user/user-8.jpg"
//                                     class="rounded-circle" alt="image"/></a>
//                         </div>
//                         <div class="comment-info">
//                             <h3>
//                                 <a href="my-profile.html">Karen Williams</a>
//                             </h3>
//                             <span>5 Mins Ago</span>
//                             <p>Donec rutrum congue leo eget malesuada nulla quis lorem ut libero
//                                 malesuada feugiat donec rutrum congue leo eget.</p>
//                             <ul class="comment-react">
//                                 <li><a href="#" class="like">Like(2)</a></li>
//                                 <li><a href="#">Reply</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="more-comments">
//                         <a href="#">More Comments+</a>
//                     </div>
//                 </div>
//                 <form class="post-footer">
//                     <div class="footer-image">
//                         <a href="#"><img src="assets/images/user/user-1.jpg" class="rounded-circle"
//                                 alt="image"/></a>
//                     </div>
//                     <div class="form-group">
//                         <textarea name="message" class="form-control"
//                             placeholder="Write a comment..."></textarea>
//                         <label><a href="#"><i class="flaticon-photo-camera"></i></a></label>
//                     </div>
//                 </form>