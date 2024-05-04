from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Function to initiate the browser
def init_browser():
    # Replace the path with the location of your webdriver
    return webdriver.Chrome(executable_path='/path/to/chromedriver')

# Function to search for a specific item and download it
def search_and_download(item):
    browser = init_browser()
    browser.get("https://oceanofpdf.com/")

    # Find the search input field and enter the item to search for
    search_input = browser.find_element_by_id("searchform-1")
    search_input.send_keys(item)
    search_input.send_keys(Keys.RETURN)

    # Wait for search results to load
    time.sleep(2)

    # Click on the first search result (assuming it's the desired item)
    first_result = browser.find_element_by_css_selector(".entry-title a")
    first_result.click()

    # Wait for the download buttons to load
    time.sleep(2)

    # Find and click the PDF download button
    pdf_download_button = browser.find_element_by_css_selector("form[action='https://oceanofpdf.com/fetching-resource/'][method='post']:nth-of-type(1) input[type='image']")
    pdf_download_button.click()

    # Wait for the download to complete
    time.sleep(5)

    # Close the browser
    browser.quit()

# Example usage
search_and_download("Harry Potter: A History of Magic")
