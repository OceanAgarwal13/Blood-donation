import pandas as pd
from django.core.management.base import BaseCommand
from api.models import UserProfile  # Replace with your actual app name


class Command(BaseCommand):
    help = 'Import donor data from Excel into UserProfile model'

    def add_arguments(self, parser):
        parser.add_argument('excel_file', type=str, help='Path to blood_donor.xls')

    def handle(self, *args, **kwargs):
        excel_file = kwargs['excel_file']
        try:
            df = pd.read_excel(excel_file, dtype=str)  # Read all as string to avoid issues
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Failed to read Excel file: {e}"))
            return

        imported = 0
        for index, row in df.iterrows():
            if row.isnull().all():
                continue  # Skip fully empty rows

            try:
                profile = UserProfile(
                    name=row.get("NAME", "") or "",
                    father_name=row.get("FATHER'S NAME", "") or "",
                    ward=row.get("WARD NO.", "") or "",
                    address=row.get("ADDRESS", "") or "",
                    muhalla=row.get("MUHALLA", "") or "",
                    location=row.get("LOCATION", "") or "",
                    district=row.get("DISTTRIC", "") or "",
                    state=row.get("STATE", "") or "",
                    age=float(row.get("AGE", 0)) if row.get("AGE") not in [None, '', 'nan'] else 0,
                    y=row.get("Y", "") or "",
                    gender=row.get("M/F", "") or "",
                    blood_group=row.get("B.G.", "") or "",
                    rh=row.get("RH", "") or "",
                    occupation=row.get("OCCUPATION", "") or "",
                    mobile=row.get("MOBILE", "") or "",
                )
                profile.save()
                imported += 1
            except Exception as e:
                self.stdout.write(self.style.WARNING(f"Row {index+2} skipped: {e}"))

        self.stdout.write(self.style.SUCCESS(f"Successfully imported {imported} donor records."))
