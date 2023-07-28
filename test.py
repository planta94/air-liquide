import pandas as pd

data = pd.read_csv(r"C:\Users\paidc\OneDrive\Desktop\jiee\test.csv")

# print(data)

for index, row in data.iterrows():
    if row['C'] < 30:
        data.loc[index, 'C'] = row['C'] + 5
        print(data.loc[index, 'C'])
        # print(row)