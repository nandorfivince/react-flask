import random
import pandas as pd

df = pd.read_excel('resources/input.xlsx')

leves = df['Leves'].tolist()
foetel = df['Főétel'].tolist()
desszert = df['Desszert'].tolist()

random_leves = random.choice(leves)
random_foetel = random.choice(foetel)
random_desszert = random.choice(desszert)

print(f'Mai menü: {random_leves}, {random_foetel}, {random_desszert}')
return {"leves": random_leves, "foetel": random_foetel, "desszert": random_desszert}
