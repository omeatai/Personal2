class Asset():
    pass


class Stock(Asset):
    pass


class Bond(Asset):
    pass


stocks = [
    Stock("GOOG", 135.0, "Google Inc"),
    Stock("AAPL", 342.0, "Apple Inc"),
    Stock("META", 342.0, "Meta Platforms Inc"),
    Stock("AMZN", 120.0, "Amazon Inc")
]

bonds = [
    Bond(95.31, "30 Yr US Treasury", 30, 4.38),
    Bond(96.70, "10 Yr US Treasury", 10, 4.28),
    Bond(98.65, "5 Yr US Treasury", 5, 4.43),
    Bond(99.57, "2 Yr US Treasury", 2, 4.98)
]

try:
    ast = Asset(100.0)
except:
    print("Can't instantiate Asset!")

stocks.sort()
bonds.sort()

for stock in stocks:
    print(stock)
print("------------")
for bond in bonds:
    print(bond)
