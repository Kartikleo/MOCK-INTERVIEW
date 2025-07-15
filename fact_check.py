# fact_checker.py
import sys
from transformers import pipeline

model = pipeline("text-classification", model="uclanlp/feverbert")

claim = sys.argv[1]
result = model(claim)
print(result[0]['label'])  # e.g. "SUPPORTS", "REFUTES", "NOT ENOUGH INFO"
