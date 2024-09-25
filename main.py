import zipfile
import os

# Path to the uploaded zip file
zip_file_path = '/mnt/data/plan day (2).zip'
extracted_folder_path = '/mnt/data/plan_day_extracted/'

# Unzipping the file
with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    zip_ref.extractall(extracted_folder_path)

# List the contents of the extracted folder
extracted_files = os.listdir(extracted_folder_path)
extracted_files

# Read the contents of the style.css file
style_css_path = os.path.join(plan_day_folder_path, 'style.css')

with open(style_css_path, 'r') as file:
    style_css_content = file.read()

style_css_content
# Path to the 'plan day' folder
plan_day_folder_path = os.path.join(extracted_folder_path, 'plan day')

# List the contents of the 'plan day' folder
plan_day_files = os.listdir(plan_day_folder_path)
plan_day_files
