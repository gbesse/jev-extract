# Extraction design

The model only selects among code-generated values. This avoids asking a classifier to generate dates, count, or do arithmetic. Every selected value retains chunk, request, probability, and candidate offsets. Packing amortizes document state across questions, while chunk aggregation remains an explicit application rule.
