# rbot


Current algorithm: mean reversion with some changes.

We wait till our position is 0.01% in either direction before initiating a trade.  When we cross up the mean when we have a position, we don't sell until the ticker starts to go down.
