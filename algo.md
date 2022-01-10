## Algoritmus pro získání celkové půjčené částky
1. Najít pres FTMScan vsechny cTAROT tokeny (mnozstvi, adresa)
2. Na daném cTAROT kontraktu najít vTAROT kontrakt (vault) přes metodu underlying
3. zjistit exchangeRate z vTAROT kontraktu
4. vynasobit mnozstvi z cTAROT pomoci exchangeRate z vTAROT = celkove mnozstvi LP tokenu (pujcene + vlozene)

## Postupy
### muj balance daneho LP tokenu
- cTAROT.balanceOf(moje adresa)
### tokeny daneho vaultu
- cTAROT.borrowable0
- cTAROT.borrowable1
Pozor - odkazuje se to na bTAROT tokeny (napr. bTAROT WFTM) ne primo na dany token (napr. WFTM). bTAROT tokeny jsou borrowable - tedy tokeny ze supply casti vaultu
### kolik mam pujcene bTAROT
- cTAROT.borrowable0(bTAROT).borrowBalance(moje adresa)
- cTAROT.borrowable1(bTAROT).borrowBalance(moje adresa)
