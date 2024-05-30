import { BrowserRouter , Routes , Route } from "react-router-dom";
import React, { useEffect, useState ,useContext } from "react";
import SignUp from "./signup";
import BigPage from "./BigPage.jsx";
import HomePageBig from "./HomePageBig.jsx";
import BigPage2 from "./Bigpage2.jsx"
import BigPage3 from "./BigPage3.jsx"
import SignIn from "./signin.jsx";
import Community1 from "./chat.js";
import MainPageInfo from "./mainpageinfo.jsx";
import Books from "./books.js";
import More from "./more.js";
import UserInfo from "./userinfo.jsx";
import AboutUs from "./aboutus.jsx";
import ContactForm from "./contact.jsx";
import BookSubscription from "./book_subscription.jsx";
import PDFRenderer from "./pdfrender.jsx";
import { doc,getDoc } from 'firebase/firestore';
import { db } from './sinup';
import { UserContext } from "./usercontxt.jsx";
import HomeWow from "./homewow.jsx";
import BigPage4 from "./BigPage4.jsx";

function Route1(){
  const [tier, setTier] = useState(null);
 const { user } = useContext(UserContext);

useEffect(() => {
  const fetchSubscription = async () => {
    console.log('user:', user);
    if (!user) {
      console.log('User is not logged in');
      setTier('Free');
      return;
    } else {
      console.log('User is logged in');
      const userDoc = doc(db, 'subscriptions', String(user.uid)); // 'subscriptions' is your collection name
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        setTier(docSnap.data().tier); // 'tier' is your field name
      } else {
        console.log('No such document!');
      }
    }
  };

  fetchSubscription();
}, [user]);
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageBig/>}/>
            <Route index element={<HomePageBig/>} />
            <Route path="browse1" element={<BigPage/>} />
            <Route path="browse2" element={<BigPage2/>} />
            <Route path="browse3" element={<BigPage3/>} />
            <Route path="browse4" element={<BigPage4/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="home" element={<HomeWow/>} />
            <Route path="/chat" element={<Community1/>} /> 
            <Route path="/chat" element={<Community1/>} /> 
            <Route path="/userinfo" element={<UserInfo/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/read/:id"element={<PDFRenderer tier={tier} />} />
            <Route path="/subscription" element={<BookSubscription/>} />
            {Books.map((book, index) => (
          <Route 
            key={index}
            path={`/more/${index}`}
            element={<MainPageInfo book={book} more={More[index] } />}
          />
        ))}
        </Routes>
      </BrowserRouter>
    )
}

export default Route1;