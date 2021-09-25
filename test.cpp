// Print a interger represeting a count of debit cards transactions made
int count_transactions(int debit_card_number, int debit_card_count) {
  int count = 0;
  for (int i = 0; i < debit_card_count; i++) {
    if (debit_card_number == debit_card_numbers[i]) {
      count++;
    }
}