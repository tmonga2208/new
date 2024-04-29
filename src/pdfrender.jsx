import React, { useState, useEffect } from 'react';
import { getDocument } from 'pdfjs-dist/webpack';
import styles from "./css/pdfcomponent.module.css"
import URLS from './pdfs';
import { useParams } from 'react-router-dom';

const PDFRenderer = ({ tier }) => {
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkmode, setDarkmode] = useState(false);
  const { id } = useParams();
  console.log('id:', id);  // Check the value of id

  const pdfUrl = URLS.find(url => url.ok === Number(id))?.pdfUrl;
  console.log('pdfUrl:', pdfUrl);  // Check the value of pdfUrl
  

  useEffect(() => {
    const loadPdf = async () => {
      try {
       const pdfDoc = await getDocument({ url: pdfUrl }).promise;
        setPdf(pdfDoc);
      } catch (error) {
        console.error('Error loading PDF:', error);
        // Handle error loading PDF
      }
    };
    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (pdf) {
      renderPdfPage(currentPage);
    }
  }, [pdf, currentPage]);

  const renderPdfPage = (pageNumber) => {
    if (pdf) {
      pdf.getPage(pageNumber).then(function(page) {
        const canvasId = `page-${pageNumber}`;
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pdf && currentPage < pdf.numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDownload = () => {
    // Logic to download PDF for offline use (e.g., save to local storage)
  };

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  }

  useEffect(() => {
    if (darkmode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.style.fontFamily = "sans-serif";
      document.body.style.fontSize = "16px";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.fontFamily = "sans-serif";
      document.body.style.fontSize = "16px";
    }
  }, [darkmode]);

  return (
    <div>
      {pdf && (
        <div className={styles.container}>
           <div className={styles.prv}>
             <button  onClick={handlePreviousPage} disabled={currentPage === 1}>
               Previous
             </button>
           </div>
           <div className={styles.can}>
            <canvas className={styles.cos} key={`page-${currentPage}`} id={`page-${currentPage}`} />
           </div>
          <div className={styles.nxt}>
                <button className={styles.nxt} onClick={handleNextPage} disabled={currentPage === pdf.numPages}>Next</button>
                {tier === 'premium' && <button onClick={handleDownload}>Download</button>}
          </div>
          <div className={styles.dark}>
            <button onClick={toggleDarkMode}>Dark Mode</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default PDFRenderer;